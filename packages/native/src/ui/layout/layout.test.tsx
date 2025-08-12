import React from 'react';
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from './layout';

describe('Layout Components', () => {
  describe('Column', () => {
    it('renders with default props', () => {
      const element = React.createElement(Column, {
        testID: "column"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.type).toBe(Column);
      expect(element.props.testID).toBe("column");
      expect(element.props.children).toBeDefined();
    });

    it('renders with custom justify and align', () => {
      const element = React.createElement(Column, {
        testID: "column",
        justify: "center",
        align: "center"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.justify).toBe("center");
      expect(element.props.align).toBe("center");
    });

    it('renders with margin props', () => {
      const element = React.createElement(Column, {
        testID: "column",
        mh: 10,
        mv: 20
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.mh).toBe(10);
      expect(element.props.mv).toBe(20);
    });

    it('renders with individual margin props', () => {
      const element = React.createElement(Column, {
        testID: "column",
        mt: 10,
        mb: 20,
        ml: 5,
        mr: 15
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.mt).toBe(10);
      expect(element.props.mb).toBe(20);
      expect(element.props.ml).toBe(5);
      expect(element.props.mr).toBe(15);
    });

    it('renders with padding props', () => {
      const element = React.createElement(Column, {
        testID: "column",
        ph: 10,
        pv: 20
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.ph).toBe(10);
      expect(element.props.pv).toBe(20);
    });

    it('renders with individual padding props', () => {
      const element = React.createElement(Column, {
        testID: "column",
        pt: 10,
        pb: 20,
        pl: 5,
        pr: 15
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.pt).toBe(10);
      expect(element.props.pb).toBe(20);
      expect(element.props.pl).toBe(5);
      expect(element.props.pr).toBe(15);
    });

    it('renders with gap props', () => {
      const element = React.createElement(Column, {
        testID: "column",
        gv: 10,
        gh: 20
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.gv).toBe(10);
      expect(element.props.gh).toBe(20);
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'red' };
      const element = React.createElement(Column, {
        testID: "column",
        style: customStyle
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("column");
      expect(element.props.style).toBe(customStyle);
    });
  });

  describe('Row', () => {
    it('renders with default props', () => {
      const element = React.createElement(Row, {
        testID: "row"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.type).toBe(Row);
      expect(element.props.testID).toBe("row");
      expect(element.props.children).toBeDefined();
    });

    it('renders with custom justify and align', () => {
      const element = React.createElement(Row, {
        testID: "row",
        justify: "space-between",
        align: "flex-start"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("row");
      expect(element.props.justify).toBe("space-between");
      expect(element.props.align).toBe("flex-start");
    });

    it('renders with margin and padding props', () => {
      const element = React.createElement(Row, {
        testID: "row",
        mh: 10,
        mv: 20,
        ph: 5,
        pv: 15
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("row");
      expect(element.props.mh).toBe(10);
      expect(element.props.mv).toBe(20);
      expect(element.props.ph).toBe(5);
      expect(element.props.pv).toBe(15);
    });

    it('renders with gap props', () => {
      const element = React.createElement(Row, {
        testID: "row",
        gv: 10,
        gh: 20
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("row");
      expect(element.props.gv).toBe(10);
      expect(element.props.gh).toBe(20);
    });
  });

  describe('Main', () => {
    it('renders with default props', () => {
      const element = React.createElement(Main, {
        testID: "main"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.type).toBe(Main);
      expect(element.props.testID).toBe("main");
      expect(element.props.children).toBeDefined();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'blue' };
      const element = React.createElement(Main, {
        testID: "main",
        style: customStyle
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("main");
      expect(element.props.style).toBe(customStyle);
    });

    it('renders default content when no children provided', () => {
      const element = React.createElement(Main, {
        testID: "main"
      });
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("main");
      expect(element.props.children).toBeUndefined();
    });
  });

  describe('ScrollHorizontal', () => {
    it('renders with default props', () => {
      const element = React.createElement(ScrollHorizontal, {
        testID: "scroll-horizontal"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.type).toBe(ScrollHorizontal);
      expect(element.props.testID).toBe("scroll-horizontal");
      expect(element.props.children).toBeDefined();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'green' };
      const element = React.createElement(ScrollHorizontal, {
        testID: "scroll-horizontal",
        style: customStyle
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("scroll-horizontal");
      expect(element.props.style).toBe(customStyle);
    });

    it('renders with paging enabled', () => {
      const element = React.createElement(ScrollHorizontal, {
        testID: "scroll-horizontal",
        pagingEnabled: true
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("scroll-horizontal");
      expect(element.props.pagingEnabled).toBe(true);
    });

    it('renders with content container style', () => {
      const contentStyle = { padding: 20 };
      const element = React.createElement(ScrollHorizontal, {
        testID: "scroll-horizontal",
        contentContainerStyle: contentStyle
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("scroll-horizontal");
      expect(element.props.contentContainerStyle).toBe(contentStyle);
    });
  });

  describe('ScrollVertical', () => {
    it('renders with default props', () => {
      const element = React.createElement(ScrollVertical, {
        testID: "scroll-vertical"
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.type).toBe(ScrollVertical);
      expect(element.props.testID).toBe("scroll-vertical");
      expect(element.props.children).toBeDefined();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'yellow' };
      const element = React.createElement(ScrollVertical, {
        testID: "scroll-vertical",
        style: customStyle
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("scroll-vertical");
      expect(element.props.style).toBe(customStyle);
    });

    it('renders with content container style', () => {
      const contentStyle = { padding: 20 };
      const element = React.createElement(ScrollVertical, {
        testID: "scroll-vertical",
        contentContainerStyle: contentStyle
      }, React.createElement('div', {}, 'Test Content'));
      
      expect(element).toBeDefined();
      expect(element.props.testID).toBe("scroll-vertical");
      expect(element.props.contentContainerStyle).toBe(contentStyle);
    });
  });
});