<?php declare(strict_types=1);

namespace Shopware\Storefront\Test\Framework\Snippet\Filter;

use PHPUnit\Framework\TestCase;
use Shopware\Core\Framework\Snippet\Filter\EditedFilter;

class EditedFilterTest extends TestCase
{
    public function testGetFilterName()
    {
        static::assertSame('edited', (new EditedFilter())->getName());
    }

    public function testSupports()
    {
        static::assertTrue((new EditedFilter())->supports('edited'));
        static::assertFalse((new EditedFilter())->supports(''));
        static::assertFalse((new EditedFilter())->supports('test'));
    }

    public function testFilterOnlyCustomSnippets()
    {
        $snippets = [
            'firstSetId' => [
                'snippets' => [
                    '1.bar' => [
                        'value' => '1_bar',
                        'id' => 1,
                        'author' => 'shopware',
                    ],
                    '1.bas' => [
                        'value' => '1_bas',
                        'id' => null,
                        'author' => 'shopware',
                    ],
                ],
            ],
            'secondSetId' => [
                'snippets' => [
                    '2.bar' => [
                        'value' => '2_bar',
                        'id' => 2,
                        'author' => 'shopware',
                    ],
                    '2.baz' => [
                        'value' => '2_baz',
                        'id' => null,
                        'author' => 'shopware',
                    ],
                ],
            ],
        ];

        $expected = [
            'firstSetId' => [
                'snippets' => [
                    '1.bar' => [
                        'value' => '1_bar',
                        'id' => 1,
                        'author' => 'shopware',
                    ],
                    '2.bar' => [
                        'value' => '',
                        'origin' => '',
                        'translationKey' => '2.bar',
                        'author' => '',
                        'id' => null,
                        'setId' => 'firstSetId',
                    ],
                ],
            ],
            'secondSetId' => [
                'snippets' => [
                    '1.bar' => [
                        'value' => '',
                        'origin' => '',
                        'translationKey' => '1.bar',
                        'author' => '',
                        'id' => null,
                        'setId' => 'secondSetId',
                    ],
                    '2.bar' => [
                        'value' => '2_bar',
                        'id' => 2,
                        'author' => 'shopware',
                    ],
                ],
            ],
        ];

        $result = (new EditedFilter())->filter($snippets, true);

        static::assertEquals($expected, $result);
    }

    public function testFilterDoesntIncludeAddedSnippets()
    {
        $snippets = [
            'firstSetId' => [
                'snippets' => [
                    '1.bar' => [
                        'value' => '1_bar',
                        'id' => 1,
                        'author' => 'shopware',
                    ],
                    '1.bas' => [
                        'value' => '1_bas',
                        'id' => null,
                        'author' => 'shopware',
                    ],
                ],
            ],
            'secondSetId' => [
                'snippets' => [
                    '2.bar' => [
                        'value' => '2_bar',
                        'id' => 2,
                        'author' => 'user/admin',
                    ],
                    '2.baz' => [
                        'value' => '2_baz',
                        'id' => null,
                        'author' => 'shopware',
                    ],
                ],
            ],
        ];

        $expected = [
            'firstSetId' => [
                'snippets' => [
                    '1.bar' => [
                        'value' => '1_bar',
                        'id' => 1,
                        'author' => 'shopware',
                    ],
                ],
            ],
            'secondSetId' => [
                'snippets' => [
                    '1.bar' => [
                        'value' => '',
                        'origin' => '',
                        'translationKey' => '1.bar',
                        'author' => '',
                        'id' => null,
                        'setId' => 'secondSetId',
                    ],
                ],
            ],
        ];

        $result = (new EditedFilter())->filter($snippets, true);

        static::assertEquals($expected, $result);
    }
}
