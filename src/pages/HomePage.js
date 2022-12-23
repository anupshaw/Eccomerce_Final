import Button from "../component/UI/Button";
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
    <table className={classes.table}>
      <caption><h1>TOURS</h1></caption>
      <tr>
        <td>JUL16</td>
        <td>DETROIT, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button>Buy Ticket</Button>
        </td>
      </tr>
      <tr>
        <td>JUL16</td>
        <td>DETROIT, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button>Buy Ticket</Button>
        </td>
      </tr>
      <tr>
        <td>JUL16</td>
        <td>DETROIT, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button>Buy Ticket</Button>
        </td>
      </tr>
      <tr>
        <td>JUL16</td>
        <td>DETROIT, MI</td>
        <td>DTE ENERGY MUSIC THEATRE</td>
        <td>
          <Button>Buy Ticket</Button>
        </td>
      </tr>
    </table>
    </div>
  );
};

export default Home;
