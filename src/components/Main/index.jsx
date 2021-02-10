import PropTypes from 'prop-types';
import * as S from './styled';

const Main = ({ title, description }) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

Main.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
};

export default Main;
