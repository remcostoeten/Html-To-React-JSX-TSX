'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Inspiration',
        href: '/inspiration',
        description: 'A list of dope websites for inspiration.',
    },
    {
        title: 'Website todo list',
        href: '/todo',
        description: 'A todo  list for myself..',
    },
];

export default function SecondaryDropdown() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Todos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid gap-3 p-4 w-max md:grid-cols-1  '>
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <span
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className='text-sm font-medium leading-none'>
                        {title}
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {children}
                    </p>
                </span>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
