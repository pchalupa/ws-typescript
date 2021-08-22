interface ButtonProps {
	title: string;
	disabled?: boolean;
	onPress: () => void;
}

const Button = ({ title, disabled = false, onPress }: ButtonProps) => (
	<button onProgress={onPress} disabled={disabled}>
		{title}
	</button>
);

function List<ItemType extends { id: string; title: string }>(data: ItemType[]) {
	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>{item.title}</div>
			))}
		</div>
	);
}
