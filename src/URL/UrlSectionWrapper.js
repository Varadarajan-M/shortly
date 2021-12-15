import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, FormControl, Form } from 'react-bootstrap';
import { makeHttpReq, makeURLOptions, localStorageService } from './helper';

function UrlSectionWrapper() {
	const urlRef = useRef(null);
	const [copyIndex, setCopyIndex] = useState(-1);
	const [processing, setProcessing] = useState(false);

	const [urlList, setUrlList] = useState(
		localStorageService.get('urlList') ?? [],
	);

	const shortenUrlHandler = async () => {
		if (urlRef.current.value.trim().length > 0) {
			setProcessing(true);
			const url = `https://api.shrtco.de/v2/shorten?url=${urlRef.current.value}`;
			const res = await makeHttpReq(url, makeURLOptions({}, 'POST'));
			if (res?.data?.ok) {
				const data = {
					orginalLink: res.data?.result.original_link,
					shortenedLink: res.data?.result.full_short_link,
				};
				setUrlList((p) => [data, ...(p ?? {})]);
				urlRef.current.value = '';
			} else {
				alert('Please Enter Valid URL');
			}
		} else {
			alert('URL Cannot be empty');
		}
		setProcessing(false);
	};

	const copyHandler = async (btnIndex, link) => {
		setCopyIndex(btnIndex);
		try {
			await navigator.clipboard.writeText(link);
		} catch (e) {
			alert('Something went wrong');
		}
	};

	const isCopyIndexEqual = (btnIndex) => copyIndex === btnIndex;

	useEffect(() => {
		localStorageService.save('urlList', urlList);
	}, [urlList]);

	return (
		<>
			<div className='url-form-card w-75'>
				<Card className='w-100 input-card p-5 mt-n5'>
					<Form.Group className='d-flex group'>
						<FormControl
							ref={urlRef}
							placeholder='Shorten a link here...'
						/>
						<Button
							onClick={shortenUrlHandler}
							className='ms-2 shorten-btn'
						>
							Shorten it!
						</Button>
					</Form.Group>
				</Card>
			</div>

			{processing && (
				<div className='text-danger w-50 p-3 text-center processing-text'>
					Shortening your URL Please wait...
				</div>
			)}

			{urlList.length > 0 && (
				<div className='shortened-urls w-75 mx-3'>
					{urlList.map((u, i) => (
						<Card className='shadow-md url-card'>
							<div className='p long-link'>{u.orginalLink}</div>
							<div className='p short-link'>
								{u.shortenedLink}
							</div>
							<div>
								<button
									onClick={() =>
										copyHandler(i, u.shortenedLink)
									}
									className='copy-btn'
									style={{
										background: isCopyIndexEqual(i)
											? 'black'
											: '',
									}}
								>
									{isCopyIndexEqual(i) ? 'Copied!' : 'Copy'}
								</button>
							</div>
						</Card>
					))}
				</div>
			)}
		</>
	);
}

export default UrlSectionWrapper;
