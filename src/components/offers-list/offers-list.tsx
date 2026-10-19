import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  onListItemHover: (id: string | null) => void;
};

function OffersList({ offers, onListItemHover }: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onListItemHover(offer.id)}
          onMouseLeave={() => onListItemHover(null)}
        />
      ))}
    </>
  );
}

export default OffersList;
