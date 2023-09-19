import { SERVER_URL } from '@/config/url.config';
import { extractErrorMessage } from './extract-error-message';

export async function redQuery({
	path,
	body = null,
	headers = {},
	method = 'GET',
	onError = null,
	onSuccess = null
}) {
	let isLoading = true;
	let error = null;
	let data = null;
	const url = `${SERVER_URL}/api${path}`;

	// ACCESS_TOKEN from LS
	const accessToken = '';

	const requestOptions = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers
		}
	};

	if (accessToken) {
		requestOptions.headers.Authorization = `Bearer ${accessToken}`;
	}

	if (body) {
		requestOptions.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(url, requestOptions);
		if (response.ok) {
			data = await response.json();
			if (onSuccess) {
				onSuccess(data);
			}
		} else {
			const errorData = await response.json();
			const errorMessage = extractErrorMessage(errorData);

			if (onError) {
				onError(errorMessage);
			}

			// Notification error
		}
	} catch (errorData) {
		const errorMessage = extractErrorMessage(errorData);

		if (errorMessage) {
			onError(errorMessage);
		}
	} finally {
		isLoading = false;
	}

	return { isLoading, error, data };
}
