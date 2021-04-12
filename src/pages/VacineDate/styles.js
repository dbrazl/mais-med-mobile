import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 20px;
    padding-top: 50px;
    flex: 1;
    background: white;
`;

export const Keyboard = styled.KeyboardAvoidingView.attrs({
    behavior: 'position',
})``;

const height = Dimensions.get('window').height;

export const Content = styled.View`
    height: ${height - 77}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Figure = styled.Image.attrs({
    resizeMode: 'contain',
})`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
`;
