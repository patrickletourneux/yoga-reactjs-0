import React from 'react';
// import Card from 'src/components/Card';
import { useState, useEffect } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// sanskrit_name: 'Navasana',
//   english_name: 'Boat',
//   img_url: 'https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1',

function Listcard({
  data,
  addToFavoritesPositions,
  deleteToFavoritesPositions,
  seeDetailCardOnClick,
  favoritesPage,
  homePage,
  detailPage,
}) {
  console.log(data);

  useEffect(() => {
    console.log('LISTCARD NOUVEAU RENDU');
  });

  return (
    <div className="marginbot">
      <Card.Group
        itemsPerRow={3}
        doubling
        centered
        textAlign="center"
      >
        {
          data.map((item) => (
            <Card
              key={item.id}
            >
              <Link
                to="/singleCard"
              >
                <Image
                  src={item.img_url}
                  onClick={seeDetailCardOnClick}
                  id={item.id}
                />
              </Link>
              <Card.Content>
                <Card.Header>{item.sanskrit_name}</Card.Header>
                <Card.Description>
                  {item.english_name}
                </Card.Description>
                {favoritesPage
                && (
                <Button
                  type="button"
                  color="black"
                  size="mini"
                  onClick={deleteToFavoritesPositions}
                  id={item.id}
                >
                  remove favorites
                </Button>
                )}
                {homePage
                && (
                <Button
                  type="button"
                  color="black"
                  size="mini"
                  onClick={addToFavoritesPositions}
                  id={item.id}
                >
                  add to favorites
                </Button>
                )}
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    </div>
  );
}

Listcard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    english_name: PropTypes.string.isRequired,
    sanskrit_name: PropTypes.string.isRequired,
  })),
  addToFavoritesPositions: PropTypes.func,
  deleteToFavoritesPositions: PropTypes.func,
  seeDetailCardOnClick: PropTypes.func,
  favoritesPage: PropTypes.bool,
  homePage: PropTypes.bool,
  detailPage: PropTypes.bool,
};

Listcard.defaultProps = {
  data: [],
  favoritesPage: false,
  homePage: false,
  detailPage: false,
  addToFavoritesPositions: function () {},
  deleteToFavoritesPositions: function () {},
  seeDetailCardOnClick: function () {},
};
export default Listcard;
