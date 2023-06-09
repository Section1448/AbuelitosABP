import Title from '../../components/Title'
import Body from '../../components/Body'

function Profile() {

    const name = "Fernando Aurelio Burgos sanchez";

    return (
      <div>
        <Title 
      title = "My Profile"
      name = {name}
      city = "Monterrey"
      />
      <Body />
      </div>
    )
}

export default Profile;