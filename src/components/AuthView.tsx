import React from 'react';
import { Text } from '@stardust-ui/react';
import * as microsoftTeams from '@microsoft/teams-js';

interface IAuthViewProps {
  title: string;
  url: string;
  //handleAuthenticated: () => void;
}

export const AuthView: React.FC<IAuthViewProps> = (props: IAuthViewProps): JSX.Element => {
  const onAuthSuccess = (result?: string | undefined): void => {
    alert(`Successfully authenticated.\n${result}`);
    //props.handleAuthenticated();
  };

  const onAuthFailure = (result?: string | undefined): void => {
    alert(`Failed to authenticate.\n${result}`);
  };

  React.useEffect((): void => {
    microsoftTeams.initialize();
    microsoftTeams.appInitialization.notifyAppLoaded();
    const authenticationParams: microsoftTeams.authentication.AuthenticateParameters = {
      url: props.url,
      successCallback: onAuthSuccess,
      failureCallback: onAuthFailure,
    }
    microsoftTeams.authentication.registerAuthenticationHandlers(authenticationParams);
  });

  return (
    <>
      <Text size={'large'} content={props.title} />
      <Text
        size={'medium'}
        content={
          <p>
            You&apos;ll need to <a href={props.url}>sign in</a> to use this app.
          </p>
        }
      />
    </>
  );
};
