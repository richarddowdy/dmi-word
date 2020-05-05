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
import StringList from '../../components/StringList/index';
import Header from '../../components/Header';
import H1 from '../../components/H1';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function HomePage() {
  const loadingTrue = false;

  const strings = ['well', 'iss', 'this', 'working'];
  return (
    <>
      <Header>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </Header>
      <Section>
        <LoadingSpinner />
        <StringList loading={loadingTrue} strings={strings} />
      </Section>
    </>
  );
}
