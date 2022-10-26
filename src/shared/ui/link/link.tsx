import {
  Link as LinkRoute,
  LinkProps as LinkRouteProps,
} from 'react-router-dom';

type LinkProps = Pick<LinkRouteProps, 'to' | 'children' | 'className'>;

export const Link = ({ to, children, className = '' }: LinkProps) => {
  return (
    <LinkRoute className={className} to={to}>
      {children}
    </LinkRoute>
  );
};
