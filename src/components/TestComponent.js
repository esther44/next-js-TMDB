const TestComponent = () => {
	fetch("https://jsonplaceholder.typicode.com/posts");
	return (
		<div>
			<p>Test component</p>
		</div>
	);
};

export default TestComponent;
