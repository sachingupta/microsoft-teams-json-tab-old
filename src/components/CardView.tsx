import React from 'react';
import { Flex, Grid, Segment, Image, Text, gridBehavior } from '@stardust-ui/react';
import { IItemListProps } from './ListView';
import { ICard } from '../api/api.interface';
import { stripHTML, launchTaskModule } from '../utils/utils';
import '../css/App.css';
import { Overflow } from './Overflow';
import { CustomImage } from './CustomImage';

export const CardView: React.FC<IItemListProps> = (props: IItemListProps): JSX.Element => {
  // CONSTANTS
  const minimumCardWidth = 278; //px

  // HELPER FUNCTION
  const calculateColumns = (width: number) => {
    return Math.floor(width / minimumCardWidth);
  };

  const [Height, setHeight] = React.useState(window.innerHeight);
  const updateHeight = () => {
    setHeight(window.innerHeight);
  };

  // EFFECT HOOKS
  React.useEffect(() => {
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [Height]);

  // STATE HOOKS
  const [Columns, setColumns] = React.useState(calculateColumns(window.innerWidth));

  // HANDLERS
  const updateColumn = () => {
    setColumns(calculateColumns(window.innerWidth));
  };

  // EFFECT HOOKS
  React.useEffect(() => {
    window.addEventListener('resize', updateColumn);
    return () => {
      window.removeEventListener('resize', updateColumn);
    };
  }, [Columns]);

  // ICARD PROCESSOR
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
          position: 'relative',
        }}
        onClick={(): void => launchTaskModule(item)}
        onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter') {
            launchTaskModule(item);
          }
        }}
      >
        {item.content.actions ? (
          <Overflow card={item} styles={{ position: 'absolute', right: '0', top: '0', margin: '0 8px 0px 0px' }} />
        ) : null}
        <Flex gap="gap.small">
          <Flex.Item>
            <CustomImage width="48px" className="listItemImage" src={item.preview.heroImageSrc} />
          </Flex.Item>
          <Flex.Item size="size.half" grow>
            <Flex column styles={{ textAlign: 'left' }}>
              <Flex.Item
                styles={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1, overflow: 'hidden' }}
              >
                <Text
                  content={stripHTML(item.preview.title)}
                  styles={{ margin: '0 0 2px 0' }}
                  size="medium"
                  weight="semibold"
                  title={stripHTML(item.preview.title)}
                />
              </Flex.Item>
              {item.preview.subTitle ? (
                <Flex.Item
                  styles={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                  }}
                >
                  <Text
                    content={stripHTML(item.preview.subTitle)}
                    styles={{ margin: '0 0 2px 0' }}
                    weight="regular"
                    size="medium"
                    title={stripHTML(item.preview.subTitle)}
                  />
                </Flex.Item>
              ) : null}
              {item.preview.text ? (
                <Flex.Item
                  grow
                  size="size.half"
                  styles={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Text
                    content={stripHTML(item.preview.text)}
                    weight="regular"
                    size="medium"
                    title={stripHTML(item.preview.text)}
                  />
                </Flex.Item>
              ) : null}
            </Flex>
          </Flex.Item>
        </Flex>
      </Segment>
    );
  };

  // RENDER
  return (
    <div style={{ margin: '0 0 0 8px', height: `${Height - 50}px`, overflow: 'scroll' }}>
      <Grid columns={Columns} accessibility={gridBehavior} content={props.itemList.map(processItem)} />
    </div>
  );
};
