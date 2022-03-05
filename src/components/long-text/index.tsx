import ReadMore from 'react-native-read-more-text';
import * as S from './styles'

type LongTextProps = {
  children: React.ReactNode
  limit?: number
}

const LongText = ({ children , limit = 3 }: LongTextProps) => {

  const renderRevealedFooter = (handlePress: () => void) => (
    <S.Label onPress={handlePress}>Mostrar menos</S.Label>
  )

  const renderTruncatedFooter = (handlePress: () => void) => (
    <S.Label onPress={handlePress}>Mostrar mais</S.Label>
  )

  return (
    <ReadMore
      numberOfLines={limit}
      renderRevealedFooter={renderRevealedFooter}
      renderTruncatedFooter={renderTruncatedFooter}
    >
      <S.Container>{children}</S.Container>
    </ReadMore>
  )
}

export { LongText }
