import '/src/components/styles.css';
import propTypes from "prop-types"

function FriendListItem({friends}){
    return(
        <>
        <section>
        <ul className="friend-list">
        {friends.map((friend) => (
            <li key={friend.id}>
                <div className='friend'>
                    <div style={{backgroundColor : friend.isOnline ? "green" : "red"}}></div>
                <img src={friend.avatar} />
                <h2>{friend.name}</h2>
                </div>
            </li>
        ))}
        </ul>
        </section>
        </>
    )
}

FriendListItem.propTypes = {
    friends : propTypes.array
};

export default FriendListItem;