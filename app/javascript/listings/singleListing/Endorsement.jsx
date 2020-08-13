import PropTypes from 'prop-types';
import { h } from 'preact';

const img_style = {
  display: 'inline', 
  borderRadius: '50%' 
}

const Endorsement = ({ avatar, content, isOpen }) => {
  const showEndorsement = isOpen
    ? 'show_full_endorsement'
    : 'show_avatar_endorsement';
  const showContent = isOpen ? 'inline' : 'none';
  return (
    <span className={showEndorsement}>
      <img
        src={avatar}
        width={30}
        height={30}
        alt="end_img"
        style={img_style}
      />
      <label style={{ display: 'inline' }}>
        <input
          type="text"
          value={content}
          style={{ display: showContent }}
          className="endorsement_content"
        />
      </label>
    </span>
  );
};

Endorsement.propTypes = {
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Endorsement;
