import React from "react";
import {
  Grid,
  Menu,
  Button,
  Header,
  Container,
  Segment,
  Icon,
  Card,
} from "semantic-ui-react";

class dailyReading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "History",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { dailyData } = this.props;

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h1" color="blue">
                Neurolife
              </Header>
            </Grid.Column>
            <Grid.Column width={9}>
              <Header as="h2" color="grey">
                Good Morning, Gemma
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button color="blue">
                <Icon name="phone volume" size="large" />
                Contact Doctor
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Segment>
                <Menu secondary vertical>
                  <Menu.Item
                    name="Profile"
                    active={activeItem === "Profile"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="History"
                    active={activeItem === "History"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Settings"
                    active={activeItem === "Settings"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Help"
                    active={activeItem === "Help"}
                    onClick={this.handleItemClick}
                  />
                </Menu>
                <Button basic color="red">
                  Logout
                </Button>
              </Segment>
            </Grid.Column>

            <Grid.Column width={12}>
              <Segment>
                <Header as="h3" color="black">
                  Daily Readings
                </Header>
                <Grid stackable columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Blood Pressure</Card.Header>
                        <Card.Meta>
                          <Header as="h4" color="red">
                            {dailyData.bloodPressure}
                          </Header>
                        </Card.Meta>
                        <Card.Description>130/89mm Hg</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Temperature</Card.Header>
                        <Card.Meta>
                          <Header as="h4" color="green">
                            {dailyData.temperature}
                          </Header>
                        </Card.Meta>
                        <Card.Description>37.5 C</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
                <Grid stackable columns={2}>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>Resting Heart Rate</Card.Header>
                        <Card.Meta>
                          <Header as="h4" color="green">
                            {dailyData.heartRate}
                          </Header>
                        </Card.Meta>
                        <Card.Description>90 BPM</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content>
                        <Card.Header>pH Level</Card.Header>
                        <Card.Meta>
                          <Header as="h4" color="green">
                            {dailyData.pH}
                          </Header>
                        </Card.Meta>
                        <Card.Description>6.5pH</Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
                <Grid divided="vertically"></Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default dailyReading;
