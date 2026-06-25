import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];

export const purposeTypeOptions = [
	{ label: 'Test', value: 'test' },
	{ label: 'Final', value: 'final' }
]

export const postsOrdersBy = [
	{ label: __('None', 'info-cards'), value: 'none' },
	{ label: __('Author', 'info-cards'), value: 'author' },
	{ label: __('Post ID', 'info-cards'), value: 'ID' },
	{ label: __('Title', 'info-cards'), value: 'title' },
	{ label: __('Name (Slug)', 'info-cards'), value: 'name' },
	{ label: __('Date', 'info-cards'), value: 'date' },
	{ label: __('Last Modified', 'info-cards'), value: 'modified' },
	{ label: __('Random', 'info-cards'), value: 'rand' },
	{ label: __('Comment Count', 'info-cards'), value: 'comment_count' }
];

export const postsOrders = [
	{ label: __('Ascending', 'info-cards'), value: 'asc' },
	{ label: __('Descending', 'info-cards'), value: 'desc' }
];