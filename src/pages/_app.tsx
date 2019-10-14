import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';
 
interface IProps {
  apollo: any
}
class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
 
export default withApollo(MyApp);