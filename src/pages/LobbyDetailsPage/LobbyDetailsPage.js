import React from 'react';
import { Link } from 'react-router-dom';
import './LobbyDetailsPage.css';
import ChannelNavBar from '../../components/ChannelNavBar/ChannelNavBar';
import { Dropdown } from 'react-materialize';

export default function LobbyDetailsPage(props) {
	const lobby = props.location.state.lobby;
	const channels = props.channels;

	return (
		<>
			<div>
				<h1>{lobby.name}</h1>
				<Dropdown
					id="Dropdown_6"
					options={{
						alignment: 'left',
						autoTrigger: true,
						closeOnClick: true,
						constrainWidth: true,
						container: null,
						coverTrigger: true,
						hover: false,
						inDuration: 150,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 250,
					}}
					trigger={<i className="large material-icons">settings</i>}
				>
					<Link to={{ pathname: '/edit-server', state: { lobby, channels } }}>
						EDIT
					</Link>
					<button onClick={() => props.handleDeleteLobby(lobby._id)}>
						DELETE
					</button>
				</Dropdown>
			</div>
			<div>
				<div>
					<div>
						<ChannelNavBar lobby={lobby} channels={channels} />
					</div>
				</div>
			</div>
		</>
	);
}
