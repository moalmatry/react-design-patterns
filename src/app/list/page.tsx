"use client";
import NumberedList from "@/components/Layouts/NumberedList";
import RegularList from "@/components/Layouts/RegularList";
import LargePersonListItem from "@/components/people/LargePersonListItem";
import SmallPersonListItem from "@/components/people/SmallPersonListItem";
import { SmallProductListItem } from "@/components/products/SmallProductListItem";
import { people, products } from "@/data";

export default function ListPage() {
  return (
    <div>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />

      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
    </div>
  );
}
