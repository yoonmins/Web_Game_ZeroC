import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
}

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
