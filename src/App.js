import "semantic-ui-css/semantic.min.css";
import {
	List,
	Placeholder,
	Segment,
	Divider,
	Search,
	Icon,
	Button,
	Header,
	Grid,
	Label,
	Table,
	Menu,
} from "semantic-ui-react";

function App() {
	return (
		<div>
			<br />
			<Segment textAlign="center" placeholder>
				<Grid columns={2}>
					<Divider vertical>OR</Divider>
					<Grid.Column>
						<Header icon>
							<Icon name="search" />
							Cari document
						</Header>
						<Search placeholder="Search document..."></Search>
					</Grid.Column>

					<Grid.Column>
						<Header icon>
							<Icon name="pdf file outline" />
							Tambah Document Baru
						</Header>
						<Button color="primary">Create Document</Button>
					</Grid.Column>
				</Grid>
			</Segment>

			<br />

			<Grid columns={3}>
				<Grid.Column>
					<Segment>
						<Placeholder>
							<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Header>
							<Placeholder.Paragraph>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Segment>
				</Grid.Column>

				<Grid.Column width={7}>
					<Segment>
						<Placeholder>
							<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Header>
							<Placeholder.Paragraph>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Segment>
				</Grid.Column>

				<Grid.Column width={3}>
					<List>
						<List.Item>
							<Header as="h4">Website Terkait</Header>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noreferrer"
								>
									Google
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.facebook.com"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.semantic-ui.com"
									target="_blank"
									rel="noreferrer"
								>
									Semantic UI
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.niomic.com"
									target="_blank"
									rel="noreferrer"
								>
									Niomic
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https:/reactjs.org"
									target="_blank"
									rel="noreferrer"
								>
									React
								</a>
							</List.Content>
						</List.Item>
					</List>
				</Grid.Column>
			</Grid>

			<Grid textAlign="center">
				<Grid.Column width="12">
					<Table celled>
						<Table.Header>
							<Table.Row textAlign="right">
								<Table.HeaderCell colSpan="2">
									<Search placeholder="Search Document"></Search>
								</Table.HeaderCell>
							</Table.Row>
							<Table.Row textAlign="center">
								<Table.HeaderCell>Nama Dcoument</Table.HeaderCell>
								<Table.HeaderCell>Jenis File</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Label ribbon>Panduan Belajar Javascript</Label>
								</Table.Cell>
								<Table.Cell textAlign="center">PDF</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Panduan Belajar CSS</Table.Cell>
								<Table.Cell textAlign="center">PDF</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Panduan Belajar ReactJS</Table.Cell>
								<Table.Cell textAlign="center">PDF</Table.Cell>
							</Table.Row>
						</Table.Body>

						<Table.Footer>
							<Table.Row>
								<Table.HeaderCell colSpan="2">
									<Menu floated="right" pagination>
										<Menu.Item as="a" icon>
											<Icon name="chevron left" />
										</Menu.Item>
										<Menu.Item as="a">1</Menu.Item>
										<Menu.Item as="a">2</Menu.Item>
										<Menu.Item as="a">3</Menu.Item>
										<Menu.Item as="a">4</Menu.Item>
										<Menu.Item as="a" icon>
											<Icon name="chevron right" />
										</Menu.Item>
									</Menu>
								</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default App;
