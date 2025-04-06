import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const vinhos = [
  {
    nome: 'Cabernet Sauvignon Reserva',
    descricao: 'Notas de frutas vermelhas e carvalho. Perfeito para carnes.',
    imagem: 'data:image/jpeg;base64,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',
    tipo: 'Tinto',
    origem: 'Chile',
    teor: '13.5%',
  },
  {
    nome: 'Merlot do Vale',
    descricao: 'Corpo médio e aroma a ameixas maduras.',
    imagem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAIYAcwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBAgUEAwj/2gAIAQEAAAAAuYMaeb2ZADECrr9A7ABiEV1fewAYg9d33sAGKrrf9N7ABHfztxbytLIAq+sI7b9v7gCJRnwTOXgBxOH4JX2sgDixfyy3vZAHF4fw7vfyAOJwfNJe5kAcGNfGUSDIAg8N5k1sfIAqSs43at4/UAVZVnCsG/8AcAAB/8QAGgEBAQEAAwEAAAAAAAAAAAAAAAECAwQFBv/aAAoCAhADEAAAAAOD1efygAOl9R3flwAAAAjSACM63EAIk1QAJNJQANTNAAAP/8QAPRAAAQMDAAYGBgYLAAAAAAAAAQIDBAAFEQYSITAxchMyM1GxshQiNUGSsxUjYnFzgQcgJkBEUlN0gqHC/9oACAEBAAE/AP1pNwhw0BcmQhlH2jjNRNJrDOcDca4suLrO8NaYNBb7GuMpMchI7jrVowwMyhgFQcwk9yt6a0s7eL+CfNWi5OvM7g9n/e9NaV5Mlj8D/s1ov/HH7Z3pr9ILzaHlAqGRb/OV1os+hkT9d3V+ryNvcDQIO0cDvNJL59CxUdEhLkyQSlhCuqMcXF/ZTWkAmvSlzZUpchx5X1i17DrVHZckOpbRxNaI36VCMS2T3y9EXhqO+rrNL9za+9BobRu9KNaZpFPCuEdlhlH3KBcNaTNFpEUDgtSz8OKhKKJcdQ/qJH5E4NJtoct8sZxhpzB7ikZB/IirLkWe16xyfQ2PIN3Pt0d663R0s661LaySsgYDSQKuFihydXpYEdepnVytz30xozbSsH6Mi5ByMOOVHt7fQrQqM3qKB1gHFcCMGoiENxYyEDCUtIAHcAN2/wC0Llzt/LTU1RQCQhSj3CoS16wBZdAJ4nGzPv2Uz2S+WmOwZ5E+G7f9oXLmb+WKnIR6w6RXVUkf5gJ41EbS2sAOuK6nFs49Ukj8ttRkBDKgP5PAUx2DPInw3b/tC48zfkFSxt4++o/Wpns1/caY7BnkT4buR7QuPO38tNS1hJ21HcTre+mdrZ5TTHYNcifDdyTi4XLnb+WmpkptEn0crV0hb6TqjGM4ph4BQyo/CKjK+rOTxTTHYM8ifDd3e7Rot4ubDgfCklk5QRjCmxVz0kt0ZSA45NysEjCUGmtLrSlXaT/gRUe+w20LWfTFhCSSMpGcDNW55MmBCfSkhLsdtYB4gKSDu9Jz+0t3+6N8utIzl2NyK8aBptWY7/4S/KasXsS0/wBix5Bu9MYM1q+ypSIj7jL7LJC2mlOAKQCkg6lXtmU8pnViyPVCs5ZWnzAUIcsnHozvwGoyJslh1uPDlOLU0tKQlhzapQwNpFWVp1izWtl5BQ63CYQtJ4hQQAR+6//EACERAAECBAcAAAAAAAAAAAAAABEAAgEDMEAQEiAxM1GC/9oACAECAQE/AMXTsrnNGwoTOV/mwKjqijHqwCAoOqf/xAAkEQABAQUJAQAAAAAAAAAAAAABAwIQEjBAAAQFETRSYXKhov/aAAgBAwEBPwB6GGhZBhUqZRBr5kXLQI9VJA4NBCxv8saYuEz/2Q==',
    tipo: 'Tinto',
    origem: 'Brasil',
    teor: '13%',
  },
  {
    nome: 'Sauvignon Blanc',
    descricao: 'Fresco e frutado, ideal para peixes.',
    imagem: 'https://www.bing.com/th?id=OPHS.Vh6Ywu1eFjnobw474C474&o=5&pid=21.1&w=148&h=260&qlt=100&dpr=1&bw=6&bc=FFFFFF',
    tipo: 'Branco',
    origem: 'França',
    teor: '12%',
  },
  {
    nome: 'Rosé Provence',
    descricao: 'Leve, refrescante, com notas florais.',
    imagem: 'https://http2.mlstatic.com/D_NQ_NP_840986-MLB74075321000_012024-O.webp',
    tipo: 'Rosé',
    origem: 'França',
    teor: '11.5%',
  },
  {
    nome: 'Espumante Brut',
    descricao: 'Elegante e festivo, bolhas finas.',
    imagem: 'data:image/jpeg;base64,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',
    tipo: 'Espumante',
    origem: 'Itália',
    teor: '12.5%',
  },
  {
    nome: 'Vinho do Porto',
    descricao: 'Doce, encorpado, ótimo para sobremesas.',
    imagem: 'https://th.bing.com/th/id/OIP.2kKb0GnCFzYjY465V4kmZwAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7',
    tipo: 'Fortificado',
    origem: 'Portugal',
    teor: '20%',
  },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🍷 Catálogo de Vinhos</Text>

      {vinhos.map((vinho, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: vinho.imagem }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{vinho.nome}</Text>
            <Text style={styles.descricao}>{vinho.descricao}</Text>
            <Text style={styles.detalhes}>Tipo: {vinho.tipo}</Text>
            <Text style={styles.detalhes}>Origem: {vinho.origem}</Text>
            <Text style={styles.detalhes}>Teor alcoólico: {vinho.teor}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fdf6f6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800020',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff0f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  info: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b0000',
  },
  descricao: {
    marginTop: 6,
    marginBottom: 8,
    color: '#333',
  },
  detalhes: {
    color: '#555',
  },
});
