import{link} from 'react-router-dom';
function MainNavigation(){
return(
<header>
<div>
    React Meetups
</div>
<nav>
<ul>
    <li><link to="/">AllMeetups</link></li>
    <li><link to="/new-meetup">AllMeetups</link></li>
    <li><link to="/favorites">AllMeetups</link></li>
</ul>
</nav>
</header>

)

}
export default MainNavigation;