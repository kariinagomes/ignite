import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
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
 */
