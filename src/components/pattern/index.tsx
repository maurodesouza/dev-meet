import { pattern } from './pattern'
import * as S from './styles'


const Pattern = () => {
  return (
    <S.Container>
      {pattern.map(({ children, gap, spacing, ...props}) => (
        <S.Wrapper gap={gap} spacing={spacing}>
          <S.Shimmer  {...props} />
          {children && (
            <>
              <S.Separator />
              <S.Shimmer  {...children} />
            </>
          )}
        </S.Wrapper>
      ))}
    </S.Container>
  )
}

export { Pattern }
