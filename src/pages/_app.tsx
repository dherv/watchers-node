import App, { Container } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../graphql/lib/withApollo";

interface IProps {
  apollo: any;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    //TODO: remove Container and its content and load fonts locally
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Barlow:300,400,600|Raleway:300,400,500,600,700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
