<script type="text/babel">
	class LikeButton extends React.Component{
		constructor(props){
			super(props);
				this.state = {
					liked : false,
					};
				}
				
				render(){
					return <button type="submite" onClick= {() => {this.setState({liked : true})}>{this.state.liked === true ? 'Liked' : 'Like'}</button>;
				}
			}
</script>
<script type="text/babel">
	ReactDOM.render(<LikeButton />, document.querySelector('#root'));
</script>
