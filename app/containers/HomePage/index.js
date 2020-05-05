/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// import CenteredSection from './CenteredSection';
import Section from './Section';

export default function HomePage() {
  return (
    <Section>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </Section>
  );
}
