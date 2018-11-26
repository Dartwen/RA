const FontSelector = ({fonts, selectedFont, onSelect}) => {

    const handlerFont = (event) => {
        onSelect(fonts.filter(type => type.name === event.target.value)[0]);
    };

    return (
        <div className="font-picker">
            {fonts.map((font, i) => {
                return (
                    <div className="grid center font-item">
                        <input type="radio" name="font" value={font.name} id={font.name} onChange={handlerFont}/>
                        <label htmlFor={font.name} className="grid-1">
                            <PictureFont path={font.path} text={font.name.slice(0, -1)} key={`char-${i}`}/>
                        </label>
                    </div>
                )
            })}
        </div>
    )
};