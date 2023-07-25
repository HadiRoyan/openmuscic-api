/* eslint-disable camelcase */
const mapDBtoSongModel = ({ id, title, performer }) => (
  { id, title, performer }
);

const mapDBtoSongModelDetail = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId: album_id,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBtoSongModel, mapDBtoSongModelDetail };
