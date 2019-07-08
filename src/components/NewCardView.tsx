import React from 'react';
import { Flex, Grid, Segment, Image, Header, Icon, Text, Button, gridBehavior } from '@stardust-ui/react';
import { IItemListProps } from './ListView';
import { ICard } from '../api/api.interface';
import { stripHTML, launchTaskModule } from '../utils/utils';
import '../css/App.css';

export const NewCardView: React.FC<IItemListProps> = (props: IItemListProps): JSX.Element => {
  const processItem = (item: ICard): JSX.Element => {
    return (
      <Segment
        data-is-focusable="true"
        styles={{
          margin: '0 0 16px 12px',
          height: '146px',
          padding: '20px 20px 20px 20px',
          borderRadius: '3px',
          boxShadow: '0px 2px 4px -0.75px rgba(0,0,0,0.1)',
        }}
        onClick={(): void => launchTaskModule(item)}
        
      >
        <Flex gap="gap.small">
          <Flex.Item>
            <Image
              styles={{ width: '48px', height: '100%' }}
              src={item.preview.heroImageSrc}
              className="listItemImage"
            />
          </Flex.Item>
          <Flex.Item size="size.half" grow>
            <Flex column styles={{ textAlign: 'left' }}>
              <Flex.Item>
                <Text content={item.preview.title} styles={{ margin: '0 0 2px 0' }} size="medium" weight="bold" />
              </Flex.Item>
              <Flex.Item>
                <Text content={'SUBTITLE HERE'} styles={{ margin: '0 0 2px 0' }} size="smaller" weight="semilight" />
              </Flex.Item>
              {item.preview.subTitle ? (
                <Flex.Item
                  grow
                  size="size.half"
                  styles={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                  }}
                >
                  <Text content={item.preview.subTitle} weight="regular" size="small" />
                </Flex.Item>
              ) : null}
            </Flex>
          </Flex.Item>
        </Flex>
      </Segment>
    );
  };

  return (
    <div style={{ margin: '0 0 0 8px' }}>
      <Grid columns={4} accessibility={gridBehavior} content={props.itemList.map(processItem)} />
    </div>
  );
};