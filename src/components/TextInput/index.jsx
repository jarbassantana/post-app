import { Posts } from '../Posts';
import './styles.css';

export const TextInput = ({ searchValue, handleChange, filteredPosts }) => {
  return (
    <div className="input-container">
      {!!searchValue && (
        <>
          <h1>Valor Pesquisado: {searchValue}</h1>
          <br />
        </>
      )}
      <input
        className="input-search"
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Pesquisar posts"
      />

      <br />
      <br />
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Post não encontrado!</p>}
    </div>
  );
};