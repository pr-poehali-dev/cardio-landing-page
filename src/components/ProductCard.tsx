import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  category: string;
  icon: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  features,
  category,
  icon,
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon name={icon} size={24} className="text-blue-600" />
          </div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;