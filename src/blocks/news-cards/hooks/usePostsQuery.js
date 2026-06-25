import { useState, useEffect } from 'react';

import { useWPAjax } from '../../../../../bpl-tools/hooks';

const ncbPostsAjaxHandler = 'ncbPosts';

const usePostsQuery = (nonce, attributes, currentPostId = 0) => {
	const { postType, taxonomyRelation = 'AND', selectedTaxonomies = {}, selectedCategories = [], selectedTags = [], postsAuthors = [], isPostsPerPageAll, postsPerPage, postsOrderBy, postsOrder, postsSearch, postsOffset = 0, postsInclude = [], postsExclude = [], isExcludeCurrent, isExcludeSticky, fImgSize = 'full', metaDateFormat = 'M j, Y' } = attributes;

	const queryAttr = { postType, taxonomyRelation, selectedTaxonomies, selectedCategories, selectedTags, postsAuthors, isPostsPerPageAll, postsPerPage, postsOrderBy, postsOrder, postsSearch, postsOffset, postsInclude, postsExclude, isExcludeCurrent, isExcludeSticky, fImgSize, metaDateFormat, currentPostId };
	const { data = null, saveData = () => {}, isLoading = false } = useWPAjax(ncbPostsAjaxHandler, { _wpnonce: nonce, queryAttr, pageNumber: 1 }, false) || {};

	const [posts, setPosts] = useState([]);
	const [totalPosts, setTotalPosts] = useState(0);

	useEffect(() => {
		if (data) {
			const dataPosts = Array.isArray(data) ? data : (data?.posts || []);
			const dataTotalPosts = Array.isArray(data) ? data.length : (data?.totalPosts || 0);

			setPosts(dataPosts);

			if (dataTotalPosts > 0 || Array.isArray(data)) {
				setTotalPosts(dataTotalPosts);
			}
		}
	}, [data]);

	useEffect(() => {
		saveData({ _wpnonce: nonce, queryAttr, pageNumber: 1 });
	}, [JSON.stringify(queryAttr)]);

	return { posts, isLoading, totalPosts };
};
export default usePostsQuery;
