enum ButtonType {
	Primary = 'primary',
	Secondary = 'secondary',
}

function getButton(type: ButtonType) {
	return type;
}

getButton(ButtonType.Primary);
