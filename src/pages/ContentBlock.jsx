import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockFooter,
  BlockHeader,
  BlockTitle,
} from 'konsta/react';

export default function ContentBlockPage() {
  return (
    <Page>
      <Navbar
        title="Content Block"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Block Title</BlockTitle>
      <Block>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>Strong Block</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>Strong Outline Block</BlockTitle>
      <Block strong outline>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>

      <BlockTitle>Strong Inset Block</BlockTitle>
      <Block strong inset>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>

      <BlockTitle>Strong Inset Outline Block</BlockTitle>
      <Block strong inset outline>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle>With Header & Footer</BlockTitle>
      <BlockHeader>Header</BlockHeader>
      <Block strong outline>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockFooter>Footer</BlockFooter>
      <BlockTitle medium>Medium Title</BlockTitle>
      <Block strong outline>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
      <BlockTitle large>Large Title</BlockTitle>
      <Block strong outline>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
    </Page>
  );
}
ContentBlockPage.displayName = 'ContentBlockPage';
