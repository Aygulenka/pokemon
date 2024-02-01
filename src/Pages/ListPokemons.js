import React from 'react';
import { Image } from 'antd';
import './pokemonList.css';

const ListPokemons = ({ pokemonList }) => {
  return (
    <div>
      <div className='pokemonList'>
        <ul>
          {pokemonList && pokemonList.length > 0 ? (
            <Image.PreviewGroup>
              {pokemonList.map(pokemon => (
                <li key={pokemon.id} className='group-pok'>
                  <p className='pokemonName'>{pokemon.name}</p>
                  <p className='pokemonType'>Тип: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                  {/* Отображение спрайтов покемона */}
                  <div className='pokemonPhoto'>
                  <Image
                    key={`${pokemon.id}-front-default`}
                    width={70}
                    src={pokemon.sprites.front_default}
                    alt="Front Default"
                    preview={{
                      mask: (
                        <div style={{ color: 'white', fontWeight: 'bold' }}>
                          {pokemon.name}
                        </div>
                      ),
                    }}
                  />
                  <Image
                    key={`${pokemon.id}-back-default`}
                    width={70}
                    src={pokemon.sprites.back_default}
                    alt="Back Default"
                    preview={{
                      mask: (
                        <div style={{ color: 'white', fontWeight: 'bold' }}>
                          {pokemon.name}
                        </div>
                      ),
                    }}
                  />
                  <Image
                    key={`${pokemon.id}-front-shiny`}
                    width={70}
                    src={pokemon.sprites.front_shiny}
                    alt="Front Shiny"
                    preview={{
                      mask: (
                        <div style={{ color: 'white', fontWeight: 'bold' }}>
                          {pokemon.name}
                        </div>
                      ),
                    }}
                  />
                  <Image
                    key={`${pokemon.id}-back-shiny`}
                    width={70}
                    src={pokemon.sprites.back_shiny}
                    alt="Back Shiny"
                    preview={{
                      mask: (
                        <div style={{ color: 'white', fontWeight: 'bold' }}>
                          {pokemon.name}
                        </div>
                      ),
                    }}
                  />
                  </div>
                </li>
              ))}
            </Image.PreviewGroup>
            
          ) : (
            <p>Данные о покемонах не загружены.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ListPokemons;
