const { Path, SVG } = wp.components;

export default function HeadingLevelIcon( { element, __unstableActive } ) {
	const levelToPath = {
		h1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
		h2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
		h3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
		h4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
		h5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
		h6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z',
		span: 'M 8.906 12.656 L 8.906 12.656 L 8.906 12.656 Q 8.906 14.009 7.932 14.789 L 7.932 14.789 L 7.932 14.789 Q 6.958 15.568 5.222 15.568 L 5.222 15.568 L 5.222 15.568 Q 3.622 15.568 2.392 14.966 L 2.392 14.966 L 2.392 12.998 L 2.392 12.998 Q 3.403 13.449 4.104 13.633 L 4.104 13.633 L 4.104 13.633 Q 4.805 13.818 5.386 13.818 L 5.386 13.818 L 5.386 13.818 Q 6.083 13.818 6.456 13.551 L 6.456 13.551 L 6.456 13.551 Q 6.828 13.285 6.828 12.758 L 6.828 12.758 L 6.828 12.758 Q 6.828 12.464 6.664 12.235 L 6.664 12.235 L 6.664 12.235 Q 6.5 12.006 6.182 11.794 L 6.182 11.794 L 6.182 11.794 Q 5.864 11.583 4.887 11.118 L 4.887 11.118 L 4.887 11.118 Q 3.971 10.687 3.513 10.291 L 3.513 10.291 L 3.513 10.291 Q 3.055 9.894 2.781 9.368 L 2.781 9.368 L 2.781 9.368 Q 2.508 8.841 2.508 8.137 L 2.508 8.137 L 2.508 8.137 Q 2.508 6.811 3.407 6.052 L 3.407 6.052 L 3.407 6.052 Q 4.306 5.293 5.892 5.293 L 5.892 5.293 L 5.892 5.293 Q 6.671 5.293 7.378 5.478 L 7.378 5.478 L 7.378 5.478 Q 8.086 5.663 8.858 5.998 L 8.858 5.998 L 8.175 7.645 L 8.175 7.645 Q 7.375 7.317 6.852 7.187 L 6.852 7.187 L 6.852 7.187 Q 6.329 7.057 5.823 7.057 L 5.823 7.057 L 5.823 7.057 Q 5.222 7.057 4.9 7.337 L 4.9 7.337 L 4.9 7.337 Q 4.579 7.618 4.579 8.069 L 4.579 8.069 L 4.579 8.069 Q 4.579 8.349 4.709 8.558 L 4.709 8.558 L 4.709 8.558 Q 4.839 8.766 5.123 8.961 L 5.123 8.961 L 5.123 8.961 Q 5.406 9.156 6.466 9.662 L 6.466 9.662 L 6.466 9.662 Q 7.867 10.332 8.387 11.005 L 8.387 11.005 L 8.387 11.005 Q 8.906 11.678 8.906 12.656 Z  M 12.837 7.173 L 12.837 10.14 L 13.534 10.14 L 13.534 10.14 Q 14.512 10.14 14.997 9.754 L 14.997 9.754 L 14.997 9.754 Q 15.482 9.368 15.482 8.629 L 15.482 8.629 L 15.482 8.629 Q 15.482 7.884 15.076 7.529 L 15.076 7.529 L 15.076 7.529 Q 14.669 7.173 13.801 7.173 L 13.801 7.173 L 12.837 7.173 L 12.837 7.173 Z  M 17.622 8.554 L 17.622 8.554 L 17.622 8.554 Q 17.622 10.167 16.614 11.022 L 16.614 11.022 L 16.614 11.022 Q 15.605 11.876 13.746 11.876 L 13.746 11.876 L 12.837 11.876 L 12.837 15.431 L 10.718 15.431 L 10.718 5.437 L 13.91 5.437 L 13.91 5.437 Q 15.729 5.437 16.675 6.22 L 16.675 6.22 L 16.675 6.22 Q 17.622 7.002 17.622 8.554 Z',
	};
	if ( ! levelToPath.hasOwnProperty( element ) ) {
		return null;
	}

	return (
		<SVG width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" __unstableActive={ __unstableActive } >
			<Path d={ levelToPath[ element ] } />
		</SVG>
	);
}