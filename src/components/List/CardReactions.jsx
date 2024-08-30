import React from 'react';
import styled from 'styled-components';
import { EmojiBadge } from '../Emoji/EmojiBadge';

const Container = styled.div`
	display: flex;
	width: fit-content;
	gap: 8px;
	margin-top: 16px;
	position: relative;
	z-index: 3;

	@media (max-width: 768px) {
		gap: 4px;
	}
`;

const CustomEmojiBadge = styled(EmojiBadge)`
	justify-content: center;
	gap: 4px;

	@media (max-width: 768px) {
		gap: 6px;
		padding: 6px 8px;
	}
`;

const CardReactions = ({ reactions }) => {
	return (
		<>
			<Container>
				{reactions &&
					reactions.map((reaction) => (
						<CustomEmojiBadge
							key={reaction.emoji}
							emoji={reaction.emoji}
							count={reaction.count}
						/>
					))}
			</Container>
		</>
	);
};

export default CardReactions;