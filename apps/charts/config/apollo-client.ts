import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = (uri: string) => {

    return new ApolloClient({
        uri,
        cache: new InMemoryCache()
    });
}

export default apolloClient;
