/*const Inputs = () => (
  <div>
    <label>
      Стоимость: <input type="number" name="price" value="2000000"/> руб.
    </label>
    <br/>
    <label>
      На руках:
      <input type="number" name="money" value="200000"/> руб.
    </label>
    <br/>
    <label>
      Срок кредита:
      <input type="number" name="duration" value="5"/> лет.
    </label>
  </div>
);*/
const { Input } = antd;

class InputTest extends React.Component {
    state = {
        price: '', money: '', duration: ''
    };
    handleChange = (name, value) => {
        this.setState({[name]: value});
    };

    render () {
        return (
            <section>
                <Input
                    type="number"
                    label="Стоимость"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange.bind(this, 'price')}
                    required
                />
                <Input
                    type="number"
                    label="На руках"
                    name="money"
                    value={this.state.money}
                    onChange={this.handleChange.bind(this, 'money')}
                    required
                />
                <Input
                    type="number"
                    label="Стоимость"
                    name="duration"
                    value={this.state.duration}
                    onChange={this.handleChange.bind(this, 'duration')}
                    required
                />
            </section>
        );
    }




}









