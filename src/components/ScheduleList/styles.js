import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-weight: bold;
    font-family: 'Nunito Regular';
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
`;

export const Item = styled.TouchableOpacity`
    margin-top: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const IconShell = styled.View`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #ba98ff;
`;

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Label = styled.Text.attrs({
    numberOfLines: 1,
})`
    margin-left: 20px;
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: black;
`;
