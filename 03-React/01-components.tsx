interface ButtonProps {
	title: string;
	disabled: boolean;
	onPress: () => void;
}

const Button = ({ title, disabled = false, onPress }: ButtonProps) => (
	<button onProgress={onPress} disabled={disabled}>
		{title}
	</button>
);
