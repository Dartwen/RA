const TextRenderLine = ({value, onChange}) => {

	const renderText = (event) => {
		onChange(event.target.value = event.target.value.replace(/[^a-zA-Z\n+\s]/gi,'').toLowerCase());
	};
	return (
		<div className="type-text">
            <textarea name="text"
					  id="font-text"
					  cols="30"
					  rows="2"
					  placeholder="Введите текст для футболки"
			onChange={renderText}
			value={value}></textarea>

		</div>
	);
};
