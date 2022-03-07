import { useRoute, RouteProp } from '@react-navigation/native'
import * as S from './styles';

type Params = {
  webview: {
    uri: string;
  };
};

const WebView = () => {
  const { params } = useRoute<RouteProp<Params, 'webview'>>()

  return <S.Container source={{ uri: params.uri }} />;
}

export { WebView }
