import React from 'react';
import request from 'config/baseUrl';

export const useUpload = (api) => {
	let url = 'lll';
	// const [url, setUrl] = React.useState('lll');

	React.useEffect(() => {}, []);

	const handleUpload = async (image, uploadAction) => {
		var formData = new FormData();
		formData.append('file', image);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress: (progressEvent) => {
				if (progressEvent.lengthComputable) {
					let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					uploadAction();
				}
			},
		};
		try {
			const {
				data: { data },
			} = await request.post(api, formData, config);

			url = data;
			// setUrl(data);
		} catch (e) {
			return Promise.reject(e);
		}
	};

	return [url, handleUpload];
};
