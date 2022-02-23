// import { useMemo } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultsProps) {
  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price;
  //   }, 0);
  // }, [results]);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })} */}
    </div>
  );
}

/**
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houver alteração, vai atualizar o que alterou
 */

/**
 * 1. Pure Functional Components
 * 2. Render too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo:
 *     evitar que algo que ocupe mt processamento seja refeito toda vez que o componente renderizar
 *     1. Cálculos pesados
 *     2. Igualdade referencial (quando repassa a informação para um componente filho)
 * useCallback:
 *    questão de igualdade referencial
 *    (evita que a função ocupasse um novo espaço na memória toda vez que o componente for criado)
 */
